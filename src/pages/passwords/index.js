import {useState, useEffect} from 'react'
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native';
import { styled } from "nativewind";
import useStorage from '../../hooks/useStorage';
import { FlatList } from 'react-native';
import { PasswordItem } from './components/PasswordItem';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() =>{
        async function loadPasswords(){
            const passwords = await getItem('@pass');
            console.log(passwords)
            setListPasswords(passwords);
        }

        loadPasswords();
    },[focused])

    async function handleRemovePassword(item){
         const passwords = await removeItem("@pass", item);
         setListPasswords(passwords);
    }

    return(
        <StyledSafeAreaView>
            <StyledView className="bg-indigo-500 pt-10 pb-5 items-center justify-center">
                <StyledText className="font-bold text-lg text-white">
                    Senhas salvas
                </StyledText>
            </StyledView>

            <StyledView className="p-5">
                <FlatList
                data={listPasswords}
                keyExtractor={ (item) => String(item) }
                renderItem= { ({item}) => <PasswordItem data={item} removePassword={() => handleRemovePassword(item)}/> }
                />
            </StyledView>
        </StyledSafeAreaView>
    )
}