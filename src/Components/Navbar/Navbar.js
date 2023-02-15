// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import {  /* getAuthenticatedUser, */  getRememberMe, isAuthenticated } from '../../utils/auths';
import setTimeoutid from '../Pages/QuizPage';

const $= require('jquery');

const Navbar = () => {
    activeNavbar();
  if(getRememberMe()){
    renderAuthenticatedUserNavbar()
  }
    console.log(setTimeoutid.settimeoutId)
    if(setTimeoutid.settimeoutId!==undefined)
        clearTimeout(setTimeoutid.settimeoutId);
  else if(isAuthenticated()){
    renderAuthenticatedUserNavbar()
  }else{
    renderAnonymousUserNavbar();
  }
};
function renderAuthenticatedUserNavbar(){
  const authenticatedUserNavbar =`
     <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#" data-uri="/">Site Sacha Nor</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);" aria-current="page" data-uri="/"><i class="fas fa-tachometer-alt"></i>HomePage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" aria-current="page" data-uri="/quizPage"><i class="fas fa-tachometer-alt"></i>Quiz</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/cv"><i class="far fa-address-book"></i>Cv</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/contact"><i class="far fa-clone"></i>Contact-me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/createQuestion"><i class="far fa-calendar-alt"></i>Create Questions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/logout" style="color: red"><i class="far fa-chart-bar"></i>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    `;
    const navbar = document.querySelector('#navbarWrapper');
    navbar.innerHTML = authenticatedUserNavbar
}
function renderAnonymousUserNavbar(){
    // const authenticatedUser = getAuthenticatedUser();
    const anonymousUserNavbar =`
<nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#" data-uri="/">Site Sacha Nor</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" aria-current="page" data-uri="/"><i class="fas fa-tachometer-alt"></i>Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/cv"><i class="far fa-address-book"></i>Cv</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/contact"><i class="far fa-clone"></i>Contact-me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" data-uri="/login"><i class="far fa-clone"></i>Login</a>
                </li>
            </ul>
        </div>
`;
    const navbar = document.querySelector('#navbarWrapper');
    navbar.innerHTML = anonymousUserNavbar;


}

function activeNavbar(){
    $(document).ready(()=>{
        setTimeout(()=>{ test(); });
    });
    $(window).on('resize', ()=>{
        setTimeout(()=>{ test(); }, 500);
    });
    $(".navbar-toggler").click(()=>{
        $(".navbar-collapse").slideToggle(300);
        setTimeout(()=>{ test(); });
    });



// --------------add active class-on another-page move----------
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

   /* $(window).on('load', ()=> {
        const current = window.location.pathname;
        console.log(current);
        $('#navbarSupportedContent ul li a').each(function (){
            const $this = $(this);
            console.log($this.attr('href').indexOf(current))
            // if the current path is like this link, make it active
            if($this.attr('href').indexOf(current) !== -1){
                $this.parent().addClass('active');
                $this.parents('.menu-submenu').addClass('show-dropdown');
                $this.parents('.menu-submenu').parent().addClass('active');
            }else{
                $this.parent().removeClass('active');
            }
        })
    }); */
}


/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */
// ---------Responsive-navbar-active-animation-----------
function test(){
    const tabsNewAnim = $('#navbarSupportedContent');
    // const selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    const activeItemNewAnim = tabsNewAnim.find('.active');
    let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    let itemPosNewAnimTop = activeItemNewAnim.position();
    let itemPosNewAnimLeft = activeItemNewAnim.position();
    console.log(itemPosNewAnimTop);
    $('.hori-selector').css({
        "top": `${itemPosNewAnimTop.top}px`,
        "left":`${itemPosNewAnimLeft.left}px`,
        "height": `${activeWidthNewAnimHeight}px`,
        "width": `${activeWidthNewAnimWidth}px`
    });
    $("#navbarSupportedContent").on("click","li",()=>{
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        console.log($(this).addClass('active'));
        activeWidthNewAnimHeight =  $(this).innerHeight();
        activeWidthNewAnimWidth =  $(this).innerWidth();
        itemPosNewAnimTop =  $(this).position();
        itemPosNewAnimLeft =  $(this).position();
        console.log(itemPosNewAnimTop);
        $(".hori-selector").css({
            "top": `${itemPosNewAnimTop.top}px`,
            "left":`${itemPosNewAnimLeft.left}px`,
            "height": `${activeWidthNewAnimHeight}px`,
            "width": `${activeWidthNewAnimWidth}px`
        });
    });
}
export default Navbar;