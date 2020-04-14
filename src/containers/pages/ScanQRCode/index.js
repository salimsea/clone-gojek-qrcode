import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera'; 

const IconWithText = (props) => {
    return (
        <View>
            <View style={{width: 60, height: 60, backgroundColor: '#61A756', borderRadius: 50}} />
            <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={{width: 35, height: 35, backgroundColor: 'white', borderRadius: 35}}>
            <Text>i</Text>
        </View>
    )
}

class ScanQRCode extends React.Component {
    state = {
        barcode: ''
    }
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor: 'grey'}}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message: 'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={(barcode) => {
                                var test = JSON.stringify(barcode);
                                console.log(test)
                                
                                // this.setState({
                                //     barcode: test
                                // })
                            }}
                        />
                    <View style={{flexDirection: 'row', paddingHorizontal: 16, marginTop:15, justifyContent:'space-between', position: 'absolute', top: 0, left: 0, width: '100%'}}>
                        <IconAction />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80}}>
                            <IconAction />
                            <IconAction /> 
                        </View>
                    </View>
                </View>
                <View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16}}>
                    <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
                        <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}}></View>
                        <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}}></View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>More Option</Text>
                        <Text style={{fontSize: 14, color:'#61A756', fontWeight: 'bold'}}>SHORTCUT</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start' ,width: 160, justifyContent:'space-between', paddingRight: 12}}>
                            <IconWithText title="Phone Number" />
                            <IconWithText title="Gopay Code"  />
                        </View>
                        <View style={{width: 2, height: 60, backgroundColor: 'grey'}}></View>
                        <View style={{flex: 1, paddingLeft: 12}}>
                            <Text>Scan QR Code mu sekarang di aplikasi ini, ini hanya sebuah percobaan saja</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ScanQRCode;