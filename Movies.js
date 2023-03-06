  // function is for the main navbar at the top of each page.   //
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 // function is for the main navbar at the top of each page.   //
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

   // function is for dark mode   //
  function myFunction2() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }    

// website prompt + alert asking user to subscribe and showing how. I asked the visitor's name because there are spoiler alerts already for the review. just to do a bit different //
function sayHi(){
  let input = prompt("Welcome to GLA12 Horror Movies Blog. what's your name ?");
  alert("hello " + input);
  if ("hello " + input){
   alert("subscribe to our blog to get news about horror movies. Go to Subscribe and fill up the form.");
  }
}

// function to link php file // 
function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'horror.php', true);
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  }
  xhr.send();
}

// cards from homepage to display random colors with match.random //
const card = document.querySelector('.card');
const cardImgTop = card.querySelector('.card-img-top');

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function toggleLights() {
  const color = getRandomColor();
  card.style.boxShadow = `0px 0px 25px 10px ${color}`;
  cardImgTop.style.boxShadow = `0px 2px 2px ${color}`;
}

card.addEventListener('mouseover', toggleLights);
card.addEventListener('mouseout', toggleLights);


// this is  a log in form just for the indexlogin.html page //
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

// Add an event listener to the form's submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting normally

    // Get the values of the username and password input fields
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate the input fields
    if (username === '' || password === '') {
        alert('Please enter a username and password.');
        return;
    }

    // Send the form data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_login.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle the server's response here
            const response = xhr.responseText;
            if (response === 'success') {
                // Redirect the user to the dashboard page
                window.location.href = '/dashboard.php';
            } else {
                alert('Invalid username or password.');
            }
        } else {
            alert('An error occurred while processing your request.');
        }
    };
    xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
});

// log in code ends here //

// music player // 

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '_272ltgXqi4',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      mute: 1,
      start: 0,
      playlist: '_272ltgXqi4'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// form for users to leave a comment. It won't work since it needs an API. I downloaded php and sql but it didn't work.//

// Get the form and comment list elements from the HTML
const commentForm = document.getElementById('blog-form');
const commentList = document.getElementById('comment-list');

// Add an event listener to the form to handle submission  //
commentForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior  //
  event.preventDefault();

  // Get the values of the name, email, and comment fields from the form  //
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // Create a new comment object with the form values  //
  const newComment = {
    name: name,
    email: email,
    body: comment,
    postId: 1 // Replace with the ID of the blog post  //
  };

  // Send a post request to the API to create the new comment. Saw this one on a website, trying api for the post //
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Comment created:', data);
    addCommentToList(data);
  })
  .catch(error => {
    console.error('Error creating comment:', error);
  });
});

// Add the new comment to the reviews //
function addCommentToList(comment) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${comment.name}</strong> (${comment.email})<br>
    ${comment.body}
  `;
  commentList.appendChild(li);
}


// form contact us page. validates form and returns the message to fill out all fields in case any field is left empty //
function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);
  if (validateForm()) {
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
        window.location.href = document.referrer; // redirect back to previous page
      } else {
        alert('Failed to send email. Please try again later.');
      }
    })
    .catch(error => {
      alert('Failed to send email. Please try again later.');
      console.error(error);
    });
  }
}

const formcontact = document.getElementById("contact-form");
formcontact.addEventListener("submit", submitForm);

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }
  
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  
  if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{11}$/;
  return phoneRegex.test(phone);
}


// function to open email  ( from the about us page) there is a malito email from apoel@gmail.com. It opens from outlook and gmail if you open the blog from your phone //
function openMailClient() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:apoel@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom:${name} (${email})`;

  window.location.href = mailtoLink;
}

// validate the  posts form from the homepage and alert to fill out all fields //
// Post form function
function validateForm() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const content = document.getElementById('content');

  if (!title.value || !author.value || !content.value) {
    alert('Please fill out all fields.');
    return false;
  }

  const form1Data = new FormData(document.getElementById('post-form'));

  fetch('horror.php', {
    method: 'POST',
    body: form1Data
  })
  .then(response => response.json())
  .then(data => {
    console.log('Post created:', data);
    alert('Post created successfully!');
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });

  return true;
}

// Subscribe form function
function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);
  if (validateForm()) {
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
        window.history.back(); // redirect back to previous page
      } else {
        alert('Failed to send email. Please try again later.');
      }
    })
    .catch(error => {
      alert('Failed to send email. Please try again later.');
      console.error(error);
    });
  }
}

const formContact = document.getElementById('contact-form');
formContact.addEventListener('submit', submitForm);


  // form contact function //

function contactfunction() {
  alert("Thanks for contacting us. We are going to reply as soon as possible.");
  }

  function analyseForm() {
    // Get form data
    var title = document.getElementById("title").value;
    var date = document.getElementById("date").value;
    var author = document.getElementById("author").value;
    var content = document.getElementById("content").value;
    var file = document.getElementById("file").value;
  
    // the alert of form submited won't show up because I couldn't link the form to the database. //
    // If you refresh the page F5 after submiting the reviews form from the home page it will show the alert //

    // Check if all fields are completed
    if (title && date && author && content) {
      // Send data to server using AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "horror.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Your review was uploaded");
        }
      };
      xhr.send("title=" + title + "&date=" + date + "&author=" + author + "&content=" + content + "&file=" + file);
  
      // Prevent form from submitting
      return false;
    } else {
      // Some fields are missing
      alert("Please complete all fields.");
      return false;
    }
  }
  
  
