import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import styles from '../style/homeStyle';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../helpers/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SingleUserItem from '../../../components/singleUserItem/SingleUserItem';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      peopleList: this.props.home.homeResult.results || []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'React Redux Starter Kit',
    };
  };

  componentDidMount() {
    this.props.actions.getPeopleList().then(() => {
      this.setState({
        peopleList: this.props.home.homeResult.results,
        isLoading: false
      })
    })
  }

  componentWillUnmount() {

  }

  _onRefresh() {
    this.setState({
      refreshing: true
    })
    this.props.actions.getPeopleList().then(() => {
      this.setState({
        peopleList: this.props.home.homeResult.results,
        refreshing: false
      })
    });
  }

  render() {
    let { isLoading, peopleList } = this.state;
    if (isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='#fff'
          />
          <View style={[styles.contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator color={'#3d3e3e'} size='large' />
          </View>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#fff'
        />
        <View style={styles.contentContainer}>
          <FlatList
            ref={(ref) => { this.flatListRef = ref; }}
            data={peopleList}
            removeClippedSubviews={true}
            refreshing={this.state.refreshing}
            onRefresh={() => this._onRefresh()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.userResults}
            renderItem={({ item, index }) => {
              return (
                <SingleUserItem
                  onPress={() => { }}
                  itemIndex={index}
                  imageURL={item.picture.medium}
                  firstName={item.name.first}
                  lastName={item.name.last}
                  email={item.email}
                />
              )
            }}
            ItemSeparatorComponent={() => (
              <View style={styles.ItemSeparator} />
            )}
            // ListEmptyComponent={() => {
            //   if (!this.state.isLoading && this.state.searchTerm != '' && this.props.search.articles) {
            //     return (
            //       <View style={styles.emptyListContainer}>
            //         <Text style={styles.emptyListContainerText}>
            //           There's nothing here...
            //       </Text>
            //       </View>
            //     )
            //   } else if (searchResult.totalResults == 0) {
            //     return (
            //       <View style={styles.emptyListContainer}>
            //         <Ionicons name='ios-paper' color={'rgba(26, 188, 156,0.7)'} size={responsiveWidth(10)} />
            //         <Text style={styles.emptyListContainerText}>
            //           Nothing found...
            //       </Text>
            //       </View>
            //     )
            //   } else {
            //     return null
            //   }
            // }}
            // ListFooterComponent={() => {
            //   if (searchResult.length > 0) {
            //     if (this.props.search.searchResult.articles.length < this.props.search.searchResult.totalResults) {
            //       return (
            //         <View style={{
            //           justifyContent: 'center',
            //           alignItems: 'center',
            //           width: responsiveWidth(100),
            //           height: responsiveWidth(15)
            //         }}>
            //           <Text style={styles.listFooterText}>Hang on...</Text>
            //           <ActivityIndicator size="large" color='#000' />
            //         </View>
            //       )
            //     } else {
            //       return null
            //     }
            //   } else { return null }
            // }}
            onEndReachedThreshold={0.01}
          // onEndReached={() => {
          //   if (this.state.isLoading == false) {
          //     this.setState({
          //       currentPage: this.state.currentPage + 1
          //     })
          //     if (this.state.posts.length < this.state.totalCount)
          //       this.getItems()
          //   }
          // }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
