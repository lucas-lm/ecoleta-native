import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'
import api from '../../services/api'

interface Item {
  id: number
  image: string
  image_url: string
  title: string
}

interface Point {
  id: number
  image: string
  latitude: number
  longitude: number
  name: string
}

const Points = () => {
  const { goBack, navigate } = useNavigation()
  const [items, setItems] = useState<Item[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ])
  const [points, setPoints] = useState<Point[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await api.get('/items')
      setItems(data)
    }
    fetchItems()
  }, [])

  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await api.get('/points', {
        params: {
          city: 'Stark',
          uf: 'House',
          items: [1, 2],
        },
      })
      setPoints(data)
    }
    fetchPoints()
  }, [])

  useEffect(() => {
    const loadPosition = async () => {
      const { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Oooops...',
          'Precisamos da sua permissão para obter a localização'
        )
        return
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      setInitialPosition([latitude, longitude])
    }
    loadPosition()
  }, [])

  const handleSelectecItem = (id: number) => () => {
    selectedItems.includes(id)
      ? setSelectedItems([...selectedItems.filter((itemId) => itemId !== id)])
      : setSelectedItems([...selectedItems, id])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="arrow-left" size={20} color="#34cb79"></Icon>
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>

        <View style={styles.mapContainer}>
          {initialPosition !== [0, 0] && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => (
                <Marker
                  key={String(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  style={styles.mapMarker}
                  onPress={() => navigate('Detail', { pointId: point.id })}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Image
                      style={styles.mapMarkerImage}
                      source={{
                        uri:
                          'https://besthqwallpapers.com/Uploads/25-6-2019/97224/thumb2-little-cute-kitty-cute-animals-gray-fluffy-kitten-little-cat-kitten-with--toy.jpg',
                      }}
                    />
                    <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map((item) => (
            <TouchableOpacity
              style={[
                styles.item,
                selectedItems.includes(item.id) && styles.selectedItem,
              ]}
              onPress={handleSelectecItem(item.id)}
              key={String(item.id)}
              activeOpacity={0.6}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Points

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
})
