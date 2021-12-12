var amountPC = 300;
var offsetPC = 30;
var amountMobile = 100;
var offsetMobile = 20;
var mobileWidth = 1140;
var i = 0;

var img1 = "img/banner1.png";
var img2 = "img/banner2.png";
var img3 = "img/banner3.png";
var img4 = "img/banner4.png";
var img5 = "img/banner5.png";
var img6 = "img/banner6.png";
var img7 = "img/banner7.png";
var img8 = "img/banner8.png";
var img9 = "img/banner9.png";
var img10 = "img/banner10.png";
var img11 = "img/banner11.png";
var img12 = "img/banner12.png";
var img13 = "img/banner13.png";
var img14 = "img/banner14.png";
var img15 = "img/banner15.png";
var img16 = "img/banner16.png";

var images = [
    [
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
    ],
    [
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
    ],
    [
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
    ],
    [
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
    ],
    [
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
    ],
    [
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
    ],
    [
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
    ],
    [
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
    ],
    [
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
    ],
    [
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
    ],
    [
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
      img12,
    ],
    [
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
      img13,
    ],
    [
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
      img14,
    ],
    [
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
      img15,
    ],
    [
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
      img16,
    ],
    [
      img16,
      img15,
      img14,
      img13,
      img12,
      img11,
      img10,
      img9,
      img8,
      img7,
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
    ],
  ];
  $(document).ready(() => {
    $(".images")
      .find("img")
      .each(function (index) {
        $(this).attr("id", "img" + (index + 1));
  
        function imgFunction() {
          var y = window.scrollY;
          var imageNumber = images[i].length;
          var width = $(window).width();
          if (width <= mobileWidth) {
            while (y / (amountMobile + offsetMobile * index) > imageNumber) {
              y = y - imageNumber * (amountMobile + offsetMobile * index);
            }
            var label = Math.min(
              Math.floor(y / (amountMobile + offsetMobile * index)),
              imageNumber
            );
          } else {
            while (y / (amountPC + offsetPC * index) > imageNumber) {
              y = y - imageNumber * (amountPC + offsetPC * index);
            }
            var label = Math.min(
              Math.floor(y / (amountPC + offsetPC * index)),
              imageNumber
            );
          }
  
          var imageIds = $("#img" + (index + 1));
          var imageToUse = images[index][label];
          $(imageIds).attr("src", imageToUse);
  
          $(imageIds).removeAttr("class");
        }
        $(".images").css("outline", "0");
        $(window).scroll(() => {
          imgFunction();
        });
      });
    
  });


