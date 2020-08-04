
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
    let newArr = Array.from(htmlElement.children);
    if (newArr.length > 0){
        // let children = node.children;
        //   let newArr = Array.from(htmlElement.children);
        // for (let index = 0; index < newArr.length; index++) {
            htmlElement.removeChild(newArr[0]);
        // }
    } 
    var newP = document.createElement("p");
    var newContent = document.createTextNode(string);
    newP.appendChild(newContent);
    htmlElement.appendChild(newP);
};


htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader)

export default htmlGenerator;