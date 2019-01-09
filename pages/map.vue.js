var spamap = Vue.component("Map", {
    template: `
    <div>
        <gmap-map style="width: auto; height: 800px;" 
        :zoom="12" :center="{lat: 43.720836, lng: -79.379404}"
        ref="map">
            <gmap-marker v-for="(marker, index) in markers"
            :key="index"
            :position="marker.latLng"
            />
        </gmap-map>
    </div>

  `,
    props: ["listings"],
    $_veeValidate: {
        validator: "new"
    },
    computed: {
        markers: function() {
            return this.listings.map(l => {
                lat = l.coordinates.lat;
                lon = l.coordinates.lon;
                return { latLng: { lat: lat, lng: lon} }
            })
        }
    }
  });