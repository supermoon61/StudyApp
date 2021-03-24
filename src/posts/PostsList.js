import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {action$fetchPosts} from '../../redux/posts.actions';
import {connect} from 'react-redux';
class PostsList extends PureComponent {

  static propTypes = {
    componentId: PropTypes.string,
    action$fetchPosts: PropTypes.func,
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);

   
  }


  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }
  componentDidMount(){
    this.props.action$fetchPosts();
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ViewPost',
        passProps: {
          text: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Post1'
            }
          }
        }
      }
    });
  }

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'AddPost',
          }
        }]
      }
    });
  }

  render() {
    return (
      <View>
        <Text >Posts List Screen</Text>
        <Text>{JSON.stringify(this.props.posts)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps,{action$fetchPosts})(PostsList);
