const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    // if(currentPage == item.getAttribute("href")) {
    //     item.classList.add("active")
    // }

    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// Paginação
function paginate(selectedPage, totalPages) {
    let pages = [],
    oldpage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

        if (firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if (oldpage && currentPage - oldpage > 2) {
                pages.push("...")
            }

            if (oldpage && currentPage - oldpage > 2) {
                pages.push(oldpage + 1)
            }

            pages.push(currentPage)
            oldpage = currentPage
        }
    }
}

const pagination = document.querySelector(".pagination")
const filter = pagination.dataset.filter
const page = +pagination.dataset.page;
const total = +pagination.data.total;
const pages = paginate(page, total)

let elemets = ""
 
for (let page of pages) {
    if(String(page).includes("...")) {
        elemets += `<span>${page}</span>`
    } else {
        if(filter) {
            elemets += ` <a href= "?pages${page}&filter=${filter}">${page}</a>`
        }else {
            elemets += ` <a href= "?pages${page}">${page}</a>`
        }
    }
}

pagination.innerHTML = elemets