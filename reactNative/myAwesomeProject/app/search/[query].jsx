import { View, StatusBar, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { serachPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'

export default function Serach() {
  const query = useLocalSearchParams()
  const { data: posts, refetch } = useAppWrite(serachPosts, query)
  useEffect(() => {
    refetch()
  }, [])
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
              <View className="flex my-6 px-4">
                <Text className="font-pmedium text-gray-100 text-sm">
                  Search Results
                </Text>

                <Text className="text-2xl font-psemibold text-white mt-1">
                  {query.query}
                </Text>

                <View className="mt-6 mb-8">
                  <SearchInput initalQuery={query.query} refetch={refetch} />
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