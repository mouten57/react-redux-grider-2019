//import react and reactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail //this shows as props.children on ApprovalCard component
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentBody="Hey man, nice shot"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          commentBody="What's up McLovin?"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          commentBody="Dude, where's my car?"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
//take component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
