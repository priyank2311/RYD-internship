import React from "react";
import "./App.css";

export default function App() {
  const blocks = {
    suggested_topics : {
        main_topics :[
            {
                Topic_Name : 'Geography',
                no_questions : '10 Ques',
                time_duration : '2Hr 30Min',
                image_url : 'https://picsum.photos/seed/picsum/200/300'
            },
            {
                Topic_Name : 'Economics',
                no_questions : '10 Ques',
                time_duration : '2Hr',
                image_url : 'https://picsum.photos/seed/picsum/200/300'
            },
            {
                Topic_Name : 'History',
                no_questions : '10 Ques',
                time_duration : '2Hr',
                image_url : 'https://picsum.photos/seed/picsum/200/300'
            },
            {
                Topic_Name : 'Politics',
                no_questions : '10 Ques',
                time_duration : '2Hr 30Min',
                image_url : 'https://picsum.photos/seed/picsum/200/300'
            }
        ],
        more_topics : []
    },
    modules : { main_modules : ['Computer Graphics', 'Communication Systems', 'Database Management System', 'Computer Architecture'],
                more_modules : []
    },
    flash_card : {
        main_cards : [
            'Chemistry',
            'Physics',
            'Biology',
            'Mathematics'
        ],
        more_cards : []
    }
}
  return (
    <div>
    {blocks && blocks.suggested_topics && blocks.suggested_topics.main_topics &&
        <div className = 'container'>
             <div className = 'header'>
                 <h1>Suggested Topics</h1>
                 <button className="btn"><span>More</span></button>
            </div>
            <div className = 'topicContainer'>
                {blocks.suggested_topics.main_topics.map((topic)=>{
                    return(
                      <div className = 'topic'>
                        <div className = 'imageConatiner'>
                          <img className = 'image' alt = 'topics' src = {topic.image_url}/>
                        </div>
                        <div>
                          {topic.Topic_Name}
                        </div>
                        <div className = 'bottomRow'>
                          <div>
                          {topic.no_questions}
                          </div>
                          <div>
                            {topic.time_duration}
                          </div>
                        </div>
                      </div>
                    )
                })}
            </div>
        </div>

    }
       {blocks && blocks.modules && blocks.modules.main_modules &&
       <div className = 'container'>
            <div className = 'header'>
                <h1>Modules</h1>
                <button className="btn"><span>More</span></button>
            </div>
            <div className = 'topicContainer'>
                {blocks.modules.main_modules.map((module)=>{
                    return(
                        <div className ='module' >
                            {module}
                        </div>
                    )
                })}
            </div>
        </div>
    }
       {blocks && blocks.flash_card && blocks.flash_card.main_cards &&
       <div className = 'container'>
            <div className = 'header'>
                <h1>Flash Cards</h1>
                <button className="btn"><span>More</span></button>
            </div>
            <div className = 'topicContainer'>
                {blocks.flash_card.main_cards.map((card)=>{
                    return(
                        <div className ='module'>
                          {card}
                        </div>
                    )
                })}
            </div>
        </div>
    }
</div>
  );
}

//<img src = {topic.image_url}/>
