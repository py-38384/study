import { View, StatusBar, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'

export default function Home() {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const { data: posts, refetch } = useAppWrite(getAllPosts)
  const { data: latestPosts } = useAppWrite(getLatestPosts)
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }
  return (
    <>
    <StatusBar backgroundColor='#161622' style='light'/>
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts.documents}
        renderItem={({item}) => <VideoCard video={item}/>}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back,
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {user?.username}
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  className="w-9 h-9"
                  source={images.logoSmall}
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput
            placeholder={`Search for a video topic`}
            />
            <View className="w-full flex-1">
                <Text className="text-gray-100 text-lg font-pregular">
                    Latest Video
                </Text>
                <Trending posts={latestPosts}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found."
            subtitle="Be the first one to upload a video."
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
    </>
  )
}