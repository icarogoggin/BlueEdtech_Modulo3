import React from 'react'


const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
let pageButtons = []
for (let i = 1; i <= pages; i++) {
pageButtons.push(<button key={i} onClick={() => goToPage(i)} className="page-button" >{i}</button>)
}
return (
    <div>
    {prevPage && (<button onClick={prevPage} className="page-button"> Prev </button>)}
    {pageButtons}
    {nextPage && (<button onClick={nextPage} className="page-button">Next</button>)}
    </div>
);
};

export default Pagination