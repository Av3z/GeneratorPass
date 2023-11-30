import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styled } from "nativewind";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";


export function ModalPassword({password, handleClose}){

    const StyledView = styled(View)
    const StyledText = styled(Text)
    const StyledButton = styled(TouchableOpacity)
    const StyledPressable = styled(Pressable)

    const { saveItem } = useStorage();

    async function handleSavePassword(){
        await saveItem('@pass', password);
        handleClose();
        alert("Senha salva com sucesso!")
    }

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password);
        alert("Senha copiada com sucesso!");
    }

    return(
        <StyledView className="flex-1 items-center justify-center bg-black opacity-90">
            <StyledView className="flex bg-white items-center justify-center p-5 rounded-md w-4/5">
                <StyledText className="font-bold text-lg">Senha gerada</StyledText>
                <StyledPressable onLongPress={handleCopyPassword} className="bg-black rounded-md p-2 mt-4 w-4/5 items-center">
                    <StyledText className="font-bold text-white">{password}</StyledText>
                </StyledPressable>

                <StyledView className="flex flex-row mt-5 ">
                    <StyledButton className="p-2 mr-5" onPress={handleClose}>
                        <StyledText  className="text-slate-500">
                            Voltar
                        </StyledText>
                    </StyledButton>

                    <StyledButton onPress={handleSavePassword} className="p-2 bg-indigo-500 rounded-md">
                        <StyledText className="text-white">
                            Salvar senha
                        </StyledText>
                    </StyledButton>

                </StyledView>
            </StyledView>
        </StyledView>
    )
}