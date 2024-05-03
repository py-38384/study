import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export class AuthLayout extends Component {
  render() {
    return (
      <>
        <Stack>
          <Stack.Screen
          name='sign-in'
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name='sign-up'
          options={{
            headerShown: false
          }}
          />
        </Stack>
        <StatusBar 
          backgroundColor='#161622'
          style='light'
        />
      </>
    )
  }
}

export default AuthLayout