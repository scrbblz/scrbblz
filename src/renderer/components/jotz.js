var React = require('react/addons');
var SideMenu = require('./side_menu/side_menu');
var Content = require('./content/content');
var TopBar = require('./top_bar/top_bar');

/*
  This is where the applications state is created/managed.
  TODO: Link up fetchNotes to allNotes for notelist view (getInitialState)
 */

var Jotz = React.createClass({

  //State created here
  getInitialState: function() {
    return {
      view: 'Notes',
      currentNote: null,
      filterQuery: ''
    };
  },

  updateSearch: function (event) {
    this.setState({
      filterQuery: event.target.value
    });
  },

  swapView: function(newView, note) {
    note = note || null;
    this.setState({
      view: newView,
      currentNote: note
    });
  },

  //children will access states/data that are passed to them as props
  //never change props, clone and modify instead
  //pass callbacks that change state as props to children
  render: function() {
    return (
      <div>
        <div className='side-container'>
          <SideMenu swapView={this.swapView}/>
        </div>
        <div className='right-container'>
          <TopBar 
            filterQuery={this.state.filterQuery}
            updateSearch={this.updateSearch}
            swapView={this.swapView}
          />
          <Content
            filterQuery={this.state.filterQuery}
            view={this.state.view}
            swapView={this.swapView}
          />
        </div>
      </div>
    );
  }
});

module.exports = Jotz;
