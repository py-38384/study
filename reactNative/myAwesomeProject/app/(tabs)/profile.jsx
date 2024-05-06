import { View, StatusBar, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import EmptyState from '../../components/EmptyState'
import { getUserPosts, signout } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'
import { icons } from '../../constants'
import InfoBox from '../../components/InfoBox'
import { router } from 'expo-router'

export default function Profile() {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const { data: posts, refetch } = useAppWrite(getUserPosts, user?.$id)
  const logout = async () => {
    await signout()
    setUser(null)
    setIsLoggedIn(false)
    router.replace('/')
  }
  return (
    <>
      <StatusBar backgroundColor='#161622' style='light' />
      <SafeAreaView className="bg-primary h-full">
        <FlatList
          data={posts.documents}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <VideoCard video={item}/>
          )}
          ListHeaderComponent={() => (
              <View className="w-full justify-center items-center mt-6 mb-12 px-4">
                <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
                  <Image
                    source={icons.logout}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </TouchableOpacity>
                <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
                  <Image
                    source={{ uri: user?.avatar }}
                    className="w-[90%] h-[90%] rounded-lg"
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-xl text-white mt-6 mb-2 font-bold">
                {user?.username}
                </Text>
                <View className="mt-5 flex-row">
                  <InfoBox
                    title={posts.length || 0}
                    subtitle="Posts"
                    containerStyles="mr-5"
                    titleStyle="text-xl"
                  />
                  <InfoBox
                    title="1.2k"
                    subtitle="Followers"
                    titleStyle="text-xl"
                  />
                </View>
              </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Videos Found"
              subtitle="No videos found for this search query"
            />
          )}
        />
      </SafeAreaView>
    </>
  )
}