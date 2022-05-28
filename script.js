
//DAta stored in Topics array
const Topics = [
    {
        topicId:0,
        title : 'Indian Knowledge',
        summary : 'Understand the term Indian Knowlegde system',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Page-1 : Indian Knowledge System Overview',
                pagecontent : 'Indian Knowledge system is a generic phrase that covers practically everything about India'
            },
            {   pageNumber : 2,
                pagetitle : 'Page-2 : Indian Knowledge System - Mathematics',
                pagecontent : 'Mathematics referred to as Ganita is an integral part of Indians from very ancient times. Ancient Indians developed several concepts of mathematics.'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'Indian Geography',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'Science',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'Social Studies',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'Advance Maths',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'General Studies',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    },
    {
        topicId:1,
        title : 'Sports',
        summary : 'sadfsd sad fs adf as fasd fd s',
        pages : [
            {   pageNumber : 1,
                pagetitle : 'Indian GEography page 1',
                pagecontent : 'Indian geography page 1 content'
            },
            {   pageNumber : 2,
                pagetitle : 'page 2',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 3,
                pagetitle : 'page 3',
                pagecontent : 'sdfsadf asdf sd as'
            },
            {   pageNumber : 4,
                pagetitle : 'page 4',
                pagecontent : 'sdfsadf asdf sd as'
            },
        ]
    }

];

let currentTopic = 0;
let currentPage = 0;

//this function will create element for home page using data available in Topics Array
function mainItemCreateor(){
    for(let item of Topics){
    let itemDiv = document.createElement('div');
    itemDiv.topicID = item.topicId;
    itemDiv.classList.add(('item'));
    let h3 = document.createElement('h3');
    h3.innerText = `${item.title}`;
    let p = document.createElement('p');
    p.innerText = `${item.summary}`;
    //appending h33 and p as child to itemDiv
    itemDiv.appendChild(h3);
    itemDiv.appendChild(p);
    itemDiv.addEventListener('click',showDetailsPage);
    //selecting main element and appending itemDiv to it
    document.querySelector('main').appendChild(itemDiv);
    }
}
mainItemCreateor();

//this function will show the details page of the clicked item 
function showDetailsPage(e){
    console.dir(e.currentTarget); // imp
    currentTopic = e.currentTarget.topicID;
    //hide the homepage
    document.querySelector('main').classList.add('hide-element');
    document.querySelector('.item-content').classList.remove('hide-element');
    //select header of detail page
    let header = document.querySelector('header');
    let contentText = document.querySelector('.content-text');
    header.innerText = Topics[currentTopic].pages[0].pagetitle;
    contentText.innerText = Topics[currentTopic].pages[0].pagecontent;
}

//added event listner to previous and next buttons
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
prevButton.addEventListener('click',showPreviousPage);
nextButton.addEventListener('click',showNextPage);

//this function will show the previous page of topic 
function showPreviousPage(){
    if(currentPage === 0){
        showError(currentPage);
    }
    else{
        currentPage--;
        let header = document.querySelector('header');
        let contentText = document.querySelector('.content-text');
        header.innerText = Topics[currentTopic].pages[currentPage].pagetitle;
        contentText.innerText = Topics[currentTopic].pages[currentPage].pagecontent;
    }

}

//this function will show the next page of the topic
function showNextPage(){
    if(currentPage === Topics[currentTopic].pages.length-1){
        showError(currentPage);
    }
    else{
        currentPage++;
        let header = document.querySelector('header');
        let contentText = document.querySelector('.content-text');
        header.innerText = Topics[currentTopic].pages[currentPage].pagetitle;
        contentText.innerText = Topics[currentTopic].pages[currentPage].pagecontent;
    }

}

//this function will show the error if person click previous button when we are in first page or when person click nex button when we are in last page
function showError(page){
    console.log(page);
    let errorWindow = document.createElement('div');

    if(page === 0){
        errorWindow.innerText = "We re in first page, can't go back";
    }
    else{
        errorWindow.innerText = "We re in last page";
    }
    errorWindow.classList.add('error')
    document.querySelector('body').appendChild(errorWindow);
    setTimeout(() =>{
        errorWindow.remove();
    },2000);
}



//function to go to homw page if Home button is clicked

document.querySelector('.ham').addEventListener('click',()=>{
    currentTopic = 0;
    currentPage = 0;
    document.querySelector('.item-content').classList.add('hide-element');
    document.querySelector('main').classList.remove('hide-element');

})
