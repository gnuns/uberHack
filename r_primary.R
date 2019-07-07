library('tidyverse')
library('leaflet')


df = read_csv('hack_data.csv')

leaflet() %>% addTiles() %>% addMarkers(lat = df$Lat, lng = df$Lng, data = df)

colnames(df)

x = df[]
x

km = kmeans(x = x,centers = 5)

1+1

x = df %>% select(Lng, Lat)

x$cluster  =  +


ggplot(x, aes(x=x$Lat, y = x$Lng, color = x$cluster)) + geom_point()
