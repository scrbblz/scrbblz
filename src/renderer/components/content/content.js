var React = require('react');
var Editor = require('./editor/editor');
var NotesList = require('./note_browser/notes_list');
var Notebooks = require('./note_browser/notebooks');
var NotesStore = require('../../stores/notes');
var NotebookStore = require('../../stores/notebooks');

/*
  This manages what is displayed in the content area,
  Notes or Editor.
 */

var Content = React.createClass({
  changeNote: function(newView, note) {
    this.currentNote = note || void 0;
    this.props.swapView(newView);
  },

  renderNotes: function() {
    return <NotesList
      notes={NotesStore}
      swapView={this.props.swapView}
      titleFilter={this.props.titleFilter}
    />;
  },

  renderNotebooks: function() {
    return <Notebooks
      notes={NotesStore}
      notebooks={NotebookStore}
      swapView={this.props.swapView}/>;
  },

  renderEditor: function() {
    return <Editor
      note={this.props.currentNote}
      notebooks={NotebookStore}
      swapView={this.props.swapView}/>;
  },

  render: function() {
    var content = {
      Notes: this.renderNotes,
      Notebooks: this.renderNotebooks,
      Editor: this.renderEditor
    };
    var classes = 'content main-container ';
    return (
      <div className={classes}>
        {content[this.props.view]()}
      </div>
    );
  }
});

module.exports = Content;
