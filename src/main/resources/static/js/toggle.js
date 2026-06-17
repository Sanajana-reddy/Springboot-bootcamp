var users = [
    {
        "name" : "John Doe",
        "gender" : "male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "female",
        "image" : "/images/jane.png"
    }
];

var id = 0;

function toggle(){
    id = (id + 1) % 2;
    var temp = users[id];
    document.getElementById("user-name").innerHTML = temp.name;
    document.getElementById("user-gender").innerText = temp.gender;
    document.getElementById("user-image").src = temp.image;

}