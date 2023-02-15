import $ from "jquery";
import {getAuthenticatedUser} from "../../utils/auths";


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
const mycvPage=`
   <h1>Sacha Norden CV:</h1>

`;

const MycvPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = mycvPage;
    const test=getAuthenticatedUser();
    console.log(test);
};

export default MycvPage;