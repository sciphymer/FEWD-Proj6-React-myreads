import React, { Component } from 'react'

class Book extends Component{

	render(){
		let books = this.props.books;
		return(
			<div>
			{
				books!==undefined && books.map(book=>{
					return(
						<li>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})`}}></div>
		                            <div className="book-shelf-changer">
		                              <select>
		                                <option value="move" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>
		                              </select>
		                            </div>
		                        </div>
	                            </div>
	                          <div className="book-title">{book.title}</div>
	                        <div className="book-authors">{(book.authors).join(" ")}</div>
	                    </li>
	                )
		        })
	        }
			</div>
	)}}
export default Book