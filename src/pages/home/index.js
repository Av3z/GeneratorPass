import {useState} from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import GeneratePassword from '../../utils/GeneratePassword';

import { styled } from 'nativewind';
import { ModalPassword } from '../../components/modal';

export function Home(){

  const StyledView = styled(View)
  const StyledText = styled(Text)
  const StyledImage = styled(Image)
  const StyledButton = styled(TouchableOpacity)

  const [modalVisible, setModalVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [size, setSize] = useState(15)

  function showModal(){
    let pass = GeneratePassword(size, modalVisible);
    setModalVisible(true);
    setPassword(pass);
  }

  return (
    <StyledView className={'flex-1 items-center justify-center'}>
      <StyledImage
      source={require('../../image/logo.png')}
      />

      <StyledText className='mb-2 mt-10 font-bold text-lg mb-2'>{size} Caracteres</StyledText>

      <StyledView className='shadow-md bg-white p-4 rounded-md w-4/5'>
        <Slider 
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor='#000'
          maximumTrackTintColor='#ff0000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(value) }
        />
      </StyledView>

      <StyledButton onPress={showModal} className='shadow-md bg-indigo-600 rounded-md w-4/5 mt-7 p-3 items-center'>
        <StyledText className='text-white font-bold'>Gerar senha</StyledText>
      </StyledButton>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={password} handleClose={() => setModalVisible(false)}>

        </ModalPassword>
      </Modal>
     
    </StyledView>
  );
}

