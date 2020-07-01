replaceText(document.body)
//start at body loop through body and if there are child nodes 
function replaceText(element){
if (element.hasChildNodes()){
    element.childNodes.forEach(replaceText) //call replaceText 
}
//if a text node (3) found a text element
else if (element.nodeType === Text.TEXT_NODE) {
    if(element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
        '<span class="rainbow">$1</span>');
        element.replaceWith(newElement);

    }
 //element.textContent = element.textContent.replace(/coronavirus/gi,'*****')
}
}