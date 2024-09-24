import { colors } from '@/constants/Colors';
import { View, Text, StyleSheet, Pressable } from'react-native'
import { Link } from 'expo-router';


export default function Index(){

  return(
    <View style={styles.container}>
      
      <Text> 
      <Text style={styles.title}>Fitnes</Text> <Text style={styles.text1}>.IA</Text> 
      </Text>

      <Text style={styles.text}>Sua IA que cria suas dietas</Text>

      <Link href="/step" asChild>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Gerar dieta</Text>
      </Pressable>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.yellow,
  },

  text1: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.white,
  },

  text: {
    fontSize: 16,
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  btn: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },

  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }
})