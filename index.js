// if(document.readyState === "complete") {
//     // Fully loaded!
// }
// else if(document.readyState === "interactive") {
//     // DOM ready! Images, frames, and other subresources are still downloading.
// }
// else {
//     // Loading still in progress.
//     // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.

//     window.addEventListener("DOMContentLoaded", () => {
//         // DOM ready! Images, frames, and other subresources are still downloading.
//     });

//     window.addEventListener("load", () => {
//         // Fully loaded!
//     });
// }

var main_body = document.querySelector("body")

function changes_in_css_vars(var_key, value) {
    var css_vars = document.querySelector(':root');
    css_vars.style.setProperty(var_key, value + 'px');
    return;
}
window.addEventListener("load", () => {
    // Fully loaded!
    let navbar_width = document.getElementById("_g_header_navbar_wrapper").offsetWidth
    changes_in_css_vars('--global-nav-width', navbar_width)
});

document.addEventListener("mouseover", async (e) => {
    let nav_tab_element = '[g_nav_header_tab]'
    let check_for_navtab_ele = e.target.matches(nav_tab_element);
    if (!check_for_navtab_ele && e.target.closest("[g-nav-container]") != null) {
        // Means Inside g-nav-container but not on nav_tab_element
        return
    }
    if (check_for_navtab_ele) {
        if (e.target.nextElementSibling) {
            document.querySelectorAll("[g-navbar-flyer]").forEach(ele => {
                ele.classList.remove("nav_flyer_active")
            })
            e.target.nextElementSibling.classList.add("nav_flyer_active")
            // Means If on nav_tab_element
            document.querySelector("[data=login-overlay]").classList.add("active_overlay")
            //document.querySelector("[activate-navbar-flyer=true]").classList.add("nav_flyer_active")
            return
        }
    }

    // Means Outside g-nav-container but not on nav_tab_element
    document.querySelectorAll("[g-navbar-flyer]").forEach(ele => {
        ele.classList.remove("nav_flyer_active")
    })
    document.querySelector("[data=login-overlay]").classList.remove("active_overlay")

})


// document.getElementById("login_nav_tab").addEventListener("mouseover", (e) => {
//     document.querySelector("[data=login-overlay]").classList.toggle("active_overlay")
//     document.querySelector("[activate-navbar-flyer=true]").classList.toggle("nav_flyer_active")
//     document.querySelector("[flyer-content-ele]").classList.toggle("flyer_content_animation")
// })

