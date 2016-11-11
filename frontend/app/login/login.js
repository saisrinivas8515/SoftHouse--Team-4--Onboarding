/**
 * Created by apple on 11/7/16.
 */

var objPeople = [
    {
        username: "sam",
        password: "123"
    },
    {
        username: "mat",
        password: "123"
    },
    {
        username: "chr",
        password: "123"
    },
]
/** Above part is used for training, can be deleted after linked to DB
 * */
function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("your username is " + username + " and your password is " + password)

    for (i=0; i < objPeople.length; i++)
    {
        if (username == objPeople[i].username && password == objPeople[i].password)
        {
         window.open('#/home');
            return;
        }
        else
        {
            alert("Your username and password are incorrect!!!");
            return;
        }
    }
}