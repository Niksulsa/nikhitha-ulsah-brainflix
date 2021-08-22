import React from 'react'

const Forms=({selectedVideo})=> {
    return (
        <article className="form-section">
            <div className="form-section__number"></div>
                <div className="form-section__box">
                    <img className="form-section__profileimg" src="" alt=""/>
                    <form id="add-comment">
                        <label>JOIN THE CONVERSATION
                            <input type="text" name="comment" placeholder="write comment here" cols="35" rows="5"  />
                        </label>
                        <br />
                        <button>COMMENT</button>
                    </form>
                </div>
       </article>
    )
}
export default Forms;
