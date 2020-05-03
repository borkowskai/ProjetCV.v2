import $ from 'jquery';

//    *******************    LOADER     ************************
		// // Wait for window load
		// $(window).load(function () {
    //   // Animate loader off screen
    //   const droneloader = '<img src="assets/images/Drone.svg" alt="My Favorite Drone" class="droneLoader" id="droneLoader" />';
    //   const appear = () => $(window).append(droneloader);
    //   $("#droneloader").show(5000, appear);
		// });

//    *******************    NAVBAR SCROLLSPY    ************************
//fait dans le html <body data-spy="scroll" data-target="#navigation" data-offset="50">
// solution Michal pour eviter le faire par le bootstrap
const sections = $('section');

if ($('body').data('active') === true) {
  $(window).scroll(function () {
      const scrollTop = $(this).scrollTop();
      $(sections).each(function (index) {
        if ($(this).offset().top <= scrollTop) {
          $('.navbar .nav-item .nav-link').removeClass('active');
          $('.navbar .nav-item .nav-link').eq(index).addClass('active');
        }
      });
  });
}

// ----------------------- section collapse ----------------------------------
$('.btnDown').click(function () {
  if ($('#collapsibleNavbar').hasClass('show')) {
    $('body').css('padding-top', '0');
  } else {
    $('body').css('padding-top', '150px');
  }
});


//asci art genetator


//   ***************    About Me top part  DRONE SPACE    ***************
const drone = $(
  '<img src="assets/images/icons8-drone3.png" alt="My Favorite Drone" class="drone" id="drone" />',
);
// ----------------------- add keyboard to drone  --------------------------------
const keyboard = $(
  '<img src="assets/images/keyboardPlus.png" alt="arrow keys" style="display: none" id="keyboard" />',
);
$('#droneSpace').append(drone);
$('#droneSpace').prepend(keyboard);

// .one - only once
$(drone).one('mouseover', function (e) {
  e.preventDefault();
  $(keyboard).show("slow");
});
$(drone).on('mouseout', function (e) {
  e.preventDefault();
  $(keyboard).hide("slow");
});


//   **************  About Me top part MANPULATE DRONE    **************
//   //function from aquarium
//   let deg = 0;
// setInterval(() => {
//   const ctnSize = $(window).width();
//   const elSize = poisson3.width();
//   console.log(ctnSize);
//   let now = parseInt(poisson3.css('left'), 10);
//   deg++;
//   now++;
//   if (now <= (ctnSize - elSize)) {
//     poisson.fadeOut(3000);
//     poisson3.css({
//       left: `${now}px`,
//       transform: `rotate(${deg}deg)`,
//     });
//   } else {
//     poisson.fadeIn(5000);
//   }
// }, 10);

let verticalPosition = 0;
let horizontalPostion = 0;

$('body').keyup(function (e) {
  // e.which is set by jQuery for those browsers that do not normally support e.keyCode.
  const keyCode = e.keyCode || e.which;
  const offset = $('#drone').offset();
  //console.log(`offset Drone ${offset.top}`);
  const degre = 20;
  const degreBase = 0;
  const degreMinus = -20;


  // Up arrow key
  if (keyCode === 38 && offset.top - 150 > 0) {
    //console.log(`droneOffsetTop ${offset.top}`);
    verticalPosition += 100;
    $('#drone')
      .css({
        transform: `rotate(${degre}deg)`,
      })
      .animate({ bottom: `${verticalPosition}px` }, 300, () => {
        $('#drone').css({
          transform: `rotate(${degreBase}deg)`,
        });
      });
  }

  // Down arrow key
  if (keyCode === 40 && offset.top - 270 < $(window).height()) {
    verticalPosition -= 100;
    $('#drone')
      .css({
        transform: `rotate(${degre}deg)`,
      })
      .animate({ bottom: `${verticalPosition}px` }, 300, () => {
        $('#drone').css({
          transform: `rotate(${degreBase}deg)`,
        });
      });
  }

  // Left arrow key
  if (keyCode === 37 && offset.left - 100 > 0) {
    horizontalPostion -= 100;
    $('#drone')
      .css({
        transform: `rotate(${degreMinus}deg)`,
      })
      .animate({ left: `${horizontalPostion}px` }, 300, () => {
        $('#drone').css({
          transform: `rotate(${degreBase}deg)`,
        });
      });
  }


  // Right arrow key
  if (keyCode === 39 && offset.left + 270 < $(window).width()) {
    horizontalPostion += 100;
    $('#drone')
      .css({
        transform: `rotate(${degre}deg)`,
      })
      .animate({ left: `${horizontalPostion}px` }, 300, () => {
        $('#drone').css({
          transform: `rotate(${degreBase}deg)`,
        });
      });
  }
});

// ---------------- added on scroll -------------------------------------
const dronePositionBase = $('#drone').offset().top;
$(document).on('scroll', function (e) {
  e.preventDefault();
  const windowScrollY = Math.round(window.scrollY);
  const documentHeight = $(document).height();

  if ((windowScrollY - dronePositionBase) < documentHeight) {
    $('#drone').animate({ top: `${windowScrollY}px` }, 100);
  }
});

//    ************************************    2nd part WEB-DEV   *****************************************

// ----------------------- add click animation - hand --------------------------------
$('.elargir').on('mouseover', function (e) {
  e.preventDefault();
  $(this).find(".animationSpace").show();
});
//mouseout - mouse overpassed
$('.elargir').on('mouseout', function (e) {
  e.preventDefault();
  $(this).find(".animationSpace").hide();
});

// ----------------------- add openning  --------------------------------
$('.elargir').on('click', function (e) {
  e.preventDefault();
  //celui qui n'est pas clique se fait plus petit
  $('.elargir').css('width', '50%');
  $('.elargir').find(".interior").hide();
  $('.elargir').find(".exterior").show();
  // celui clique (this) se fait plus grand
  $(this).css('width', '100%');
  $(this).find(".exterior").hide();
  $(this).find(".interior").show();
});

// ----------------------- add closure  --------------------------------
// ----------------------- button close --------------------------------

const closure = function (e) {
  e.preventDefault();
  const adTarget = $(this).data('target');
  $(`#${adTarget}`).css('width', '50%');
  $(`#${adTarget}`).find(".interior").hide();
  $(`#${adTarget}`).find(".exterior").show();
  e.stopPropagation();
};
// calling the same data* - reference to the same id
$('.interior').on('click', closure);
$('.close').on('click', closure);


//not working
// // -------- Using Media Queries With JavaScript -----------
// const mediaQ = window.matchMedia('(max-width:768)');

// // https://www.w3schools.com/howto/howto_js_media_queries.asp
// if ((window.width()) <760)
// function ruleMediaQuery(x) {
//   if (x.matches) { // If media query matches
//     $('.web-dev').css('flex', 'wrap');
//   }
// }
// ruleMediaQuery(mediaQ);
//    ************************************    3rd part PROJECTS   *****************************************


for (let i = 0; i < 6; i++) {
  $('#cardsProjects').append(`
    <div class="card img-fluid">
      <img class="card-img-top" src="assets/images/underConstruction.jpg" alt="underConstruction"/>

    </div>`);
  $('card-body').attr('id', `project${i}`);
}

//  nie umiem wejsc jak dodam klase overlay
//  card-img-overlay option to do the background photo
//<div class="card-img-overlay">
//<h5 class="card-title">Project</h5>
//</div>

//$('.card-img-top').css('filter', 'grayscale(100%)');
// $('.card-img-overlay').on('mouseover', function (e) {
//   e.preventDefault();
//   $('card-img-top').find(this).css('filter', 'grayscale(30%)');
// });

// -------- filter greyscale by jquery -----------
$('.card-img-top').css('filter', 'grayscale(100%)');
$('.card-img-top').on('mouseover', function (e) {
  e.preventDefault();
  $(this).css('filter', 'grayscale(30%)');
});
//mouseout - mouse overpassed
$('.card-img-top').on('mouseout', function (e) {
  e.preventDefault();
  $(this).css('filter', 'grayscale(100%)');
});


//    *****************************************   4th part EXPERIENCE  **************************************


//------------------ importer json avec fetch --------------------
// fetch('http://www.if3projets.net/wad19/izabela/data/experiences.json')
fetch('./data/experiences.json')
  .then((answer) => answer.json())
  .then((data) => {
    const experiences = data.experiences;

    function apending(items) {
      for (const item of items) {
        $('#cardEx').append(`
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">${item.year}</h5>
            <p class="card-text">${item.position} <br /> ${item.company} <br /> ${item.country}</p>
            </div>
          </div>`);
      }
    }
    apending(experiences);
  });


// ----------------------- option card qui apparaiisent---------------------------------
const cardEx = document.getElementById('cardEx');
document.addEventListener('scroll', function () {
  const scroll = document.scrollingElement.scrollTop;
  const position = cardEx.offsetTop;

  if (scroll + 500 > position) {
    $('#cardEx .card').animate({
      top: 0,
    }, 2000);
  }
});

// for (let i = 0; i < experiences.length; i++) {
//   if (i === 3) {
//     $('#cardEx').append('<div>lign</div>');
//   }
//   $('#cardEx').append(`
//       <div class="card">
//           <div class="card-body">
//           <h5 class="card-title">${experience.year}</h5>
//           <p class="card-text">${experience.position} <br /> ${experience.company} <br /> ${experience.country}</p>
//           </div>
//       </div>`);
// }

// TODO
//    **************************************  5th part EDUCATION  **************************************

//------------------ importer json avec fetch --------------------
// fetch('http://www.if3projets.net/wad19/izabela/data/education.json')
fetch('./data/education.json')
  .then((answer) => answer.json())
  .then((data) => {
    const studies = data.education;

    for (const item of studies) {
      $('#cardEd').append(`
        <div class="card">
          <div class="card-body">
          <h5 class="card-title">${item.year}</h5>
          <p class="card-text">${item.title} <br /> ${item.university} <br /> ${item.country}</p>
          </div>
        </div>`);
    }
  });

// ----------------------- option card qui apparaiisent---------------------------------
const cardEd = document.getElementById('cardEd');
document.addEventListener('scroll', function () {
  const scroll = document.scrollingElement.scrollTop;
  const position = cardEd.offsetTop;

  if (scroll + 500 > position) {
    $('#cardEd .card').animate({
      top: 0,
    }, 1000);
  }
});


//    *******************    button scroll to Top    ************************
$(document).on('scroll', function (e) {
  e.preventDefault();
  if (window.window.pageYOffset > 450) {
    $(".backToTop").css("display", "block");
  } else {
    $(".backToTop").css("display", "none");
  }
});

const position = $("#about-me").offset().top;
const droneBasePosition = $("#droneSpace").offset().top;
$(".backToTop").on('click', function () {
      $("HTML, BODY").animate({ scrollTop: position }, 1000);
      console.log(droneBasePosition);
      $('#drone').animate({ scrollTop: `${droneBasePosition}px` }, 100);
});
//    ******************************************    FOOTER    ******************************************

//--------   method to show the id but in position (not bellow the navbar)
$('.scroll_link').click(function (e) {
  e.preventDefault();
  const id = $(this).attr('href');
  $('html,body').animate({ scrollTop: $(id).offset().top - 100 }, 1000);
});


// -------- add method of sending the form by Freemium / https://elasticemail.com/
const btnForm = document.getElementById('btnForm');
btnForm.addEventListener('click', (ev) => {
  ev.preventDefault();
  const nameSender = document.getElementById('nameSender');
  const emailS = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'borkowska.wroc@wp.pl',
    //TODO add password before putting online
    Password : '',
    To : 'borkowska.pro@gmail.com',
    From : 'borkowska.wroc@wp.pl',
    Subject : `Email de mon Portfolio, de la part de ${emailS.value}`,
    Body : ` sujet : ${subject.value}, le message est:${message.value}, nom : ${nameSender.value}`,
  })
    .then(function () { alert('email was sent'); });
    // .then(function () { document.getElementById("form-control").reset(); });
});
