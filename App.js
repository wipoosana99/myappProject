import React from 'react';
import {Text,View,StyleSheet,Linking} from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.myContent}
      onPress={()=>Linking.openURL('https://youtu.be/gH_Q_saqmZA')}>#อีสานบ่ย่าน</Text>

      <Text style={styles.myContent}
      onPress={()=>Linking.openURL('https://twitter.com/hashtag/%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%8A%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%94%E0%B9%81%E0%B8%AD%E0%B8%81')}
      >#เยาวชนปลดแอก</Text>

  <Text style={{color:'#00BFF'}}onPress={()=>Linking.openURL('http://google.com')}>Google</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#8B0000',
  },
  myContent:{
    fontSize:20,
    color:'#DCDCDC',
  }
});
