import $ from "jquery";


$(document).ready(()=>{
    // Get current path and find target link
    let path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if ( path === '' ) {
        path = 'index.html';
    }
    const target = $(`#navbarSupportedContent ul li a[href=${path}]`);
    // Add active class to target link
    target.parent().addClass('active');
});
function addQuestion(){
    const main = document.querySelector('main');
    main.innerHTML=`
        <h1>Create a question on Sacha</h1>
        
`;
}

const CreateQuestion = () => {

addQuestion();

};

export default CreateQuestion;