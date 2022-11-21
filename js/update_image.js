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
