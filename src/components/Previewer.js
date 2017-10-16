import React, { Component } from 'react';
import './Previewer.css';
import Text from './Text';

const prepend = `
  import React, { Component } from 'react’;
  import { Text, View} from 'react-native’;

  export default class App extends Component { 
   render() {
     return ( 
       <View> 
`

const append = `
      </View>
    );
  }
}
`

export default class Previewer extends Component {
  render() {
    return (
      <div className="Previewer">
        {this.props.showCode ? prepend : null }
          {this.props.components.map(component => (
            <Text key={component.id}>
            {this.props.showCode ? '<' + component.parent + '>' : null }
            {component.children} 
            {this.props.showCode ? '</' + component.parent + '>': null}
            </Text>
          ))}
        {this.props.showCode ? append : null }
      </div>
    );
  }
}




