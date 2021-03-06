
var next_slide = 0;
var back_one   = 0;
var slide_size = parseInt(document.getElementById("slide_size").innerHTML);

var parser = function(event){
              response_from_route_handler =JSON.parse(this.response);

              update_title = response_from_route_handler.title; 
              new_title = document.getElementById("title").innerHTML = update_title;
        
              update_body = response_from_route_handler.body;
              new_body = document.getElementById("body").innerHTML = update_body;
};


var slider = document.getElementById("forward").addEventListener('click', function(){
               move_forward(event);}
             );

 
var backslider = document.getElementById("backward").addEventListener('click', function(){
             move_backward(event);}
           );        

function move_backward(event) {
  back_one -=2;
  move_forward(event);
}

function move_forward(event) {
    next_slide +=1;
    back_one   +=1;
    if (back_one != next_slide){
      next_slide = next_slide - 2;
      back_one = next_slide;
    }  
    if (next_slide < 0){
      next_slide = (slide_size -1);
      back_one = next_slide;
    }
    
    if (next_slide >= slide_size){
      next_slide = 0;
      back_one = next_slide;
    }

    get_new_slide();
    event.preventDefault();
  }
  
  function get_new_slide() {
    new_slide = new XMLHttpRequest;
    new_slide.open("get", "http://localhost:4567/update/"+next_slide);
    new_slide.send();
    new_slide.addEventListener("load", parser);
  }



// window.onload = function(){
//   var next_slide = 0;
//   var slide_forward = document.getElementById("forward").addEventListener("click", move_forward);
//   var slide_backward = document.getElementById("backward").addEventListener("click", move_backward);
//
// //
//
//   function move_forward(event) {
//     next_slide += 1;
//     next_slideshow_param(next_slide);
//
//     document.getElementById("body").innerHTML = get_a_new_slide;
//   }
//
//   function move_backward(event) {
//     next_slide -= 1;
//     next_slideshow_param(next_slide);
//     debugger
//     document.getElementById("title").innerHTML = get_a_new_slide;
//     document.getElementById("body").innerHTML = get_a_new_slide;
//   }
//   function get_a_new_slide(event) {
//     next_slideshow_param();
//   }
//
//   function next_slideshow_param() {
//     get_new_slide = new XMLHttpRequest;
//     get_new_slide.open("post", "http://localhost:4567/update/"+next_slide);
//     get_new_slide.send();
//     get_new_slide.addEventListener("load", function(event){
//       response =JSON.parse(this.response);
//
//       new_element_value = sendData(get_new_slide);
//       document.getElementById("title").innerHTML = new_element_value;
//
//     })
//   }
//
//   function sendData(data) {
//     var XHR = new XMLHttpRequest();
//     var urlEncodedData = "";
//     var urlEncodedDataPairs = [];
//     var name;
//
//     // We turn the data object into an array of URL encoded key value pairs.
//     for(name in data) {
//       urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
//     }
//
//     // We combine the pairs into a single string and replace all encoded spaces to
//     // the plus character to match the behaviour of the web browser form submit.
//     urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
//
//     // We define what will happen if the data is successfully sent
//     XHR.addEventListener('load', function(event) {
//       alert('Yeah! Data sent and response loaded.');
//     });
//
//     // We define what will happen in case of error
//     XHR.addEventListener('error', function(event) {
//       alert('Oups! Something goes wrong.');
//     });
//
//     // We setup our request
//     XHR.open('POST', "http://localhost:4567");
//
//     // We add the required HTTP header to handle a form data POST request
//     XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//
//     // And finally, We send our data.
//     XHR.send(urlEncodedData);
//   }
//
// }