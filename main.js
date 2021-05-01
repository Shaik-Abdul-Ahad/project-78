var images = ["Riaz photo.jpg","Salma.jpg","DSC_8903.JPG","AHAD.jpg","Asad.JPG"];

var names = ["Shaik riaz","Salma","Asra","Ahad","Asad"];

var i=0;

function update() {
    var members=5;
    if(i>members) {
        i=0;
    }
    document.getElementById("my_family").src=images[i];
    document.getElementById("family_member_name").innerHTML=names[i];
    i++;
}
