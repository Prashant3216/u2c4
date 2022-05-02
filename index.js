// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", masaiData);
var arr=JSON.parse(localStorage.getItem("schedule")) || [];
function masaiData(){
    event.preventDefault();

    var masaiObj={matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVenue:masaiForm.venue.value};
        console.log(masaiObj);

        arr.push(masaiObj);

        localStorage.setItem("schedule", JSON.stringify(arr));

        masaiForm.matchNum.value=""
        masaiForm.teamA.value="none"
        masaiForm.teamB.value="none"
        masaiForm.date.value=""
        masaiForm.venue.value="none"
}