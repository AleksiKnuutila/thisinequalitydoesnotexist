function change_img() {
  var input_edu = document.getElementById('input_edu').value;
  input_edu=input_edu;
  var input_health = document.getElementById('input_health').value;
  input_health=input_health;
  var input_inc = document.getElementById('input_inc').value;
  input_inc=input_inc;
  var projimg = document.getElementById('projimg');
  var lc = document.getElementById('latentcode').value;
//  projimg.src="https://causewegangangan.s3.eu-west-2.amazonaws.com/sg2proj_combined_inference_precise/1/proj_styleganproj_edu-10_health-10_inc-10_code1.jpg
  projimg.src="https://causewegangangan.s3.eu-west-2.amazonaws.com/sg2proj_combined_inference_precise/"+lc+"/proj_styleganproj_edu"+input_edu+"_health"+input_health+"_inc"+input_inc+"_code"+lc+".jpg";
}

function get_random_image_number() {
  max=60;
  return Math.floor(Math.random() * max)+1;
}


function change_lc_code() {
  new_lc=get_random_image_number();
  var lc = document.getElementById('latentcode');
  lc.value=get_random_image_number();

  var input_edu = document.getElementById('input_edu');
  input_edu.value=0;
  nullify_slider_fill($(input_edu));
  var input_edu = document.getElementById('input_health');
  input_health.value=0;
  nullify_slider_fill($(input_health));
  var input_inc = document.getElementById('input_inc');
  input_inc.value=0;
  nullify_slider_fill($(input_inc));

  change_img();
}

var input_edu = document.getElementById('input_edu');
var input_health = document.getElementById('input_health');
var input_inc = document.getElementById('input_inc');

output = document.getElementById('output');

input_edu.oninput = function(){
  change_img();
//    output.innerHTML = this.value;
};
input_health.oninput = function(){
  change_img();
//    output.innerHTML = this.value;
};
input_inc.oninput = function(){
  change_img();
//    output.innerHTML = this.value;
};

input_edu.oninput();
input_health.oninput();
input_inc.oninput();

function get_pct(val) {
  return Math.floor(((parseInt(val)+12)/24)*100);
}

function nullify_slider_fill(elem) {
  elem.css( 'background', 'linear-gradient(to right, #005BB9 0%, #005BB9 50%, grey 50%, grey 100%)' );
}

function change_slider_fill(elem) {
  $(elem).css( 'background', 'linear-gradient(to right, #005BB9 0%, #005BB9 '+get_pct(elem.value) +'%, grey ' + get_pct(elem.value) + '%, grey 100%)' );
  console.log(elem.value);
}

$( '.var_slider' ).on( 'input', function( ) {
  change_slider_fill(this);
} );
