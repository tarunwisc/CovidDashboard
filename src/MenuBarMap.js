import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polygon, Circle } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  lat: -1.2884,
  lng: 36.8233
};

export class ManuBarMap extends Component {
    state = 
    {
      userLocation: { lat: 32, lng: 32 }, 
      loading: true,
      covid: {},
      counties: {
        "Milwaukee":{coord:{lat:43, lng:-87.96713}, pop:947735, area:241.4},
        "Dane":{coord:{lat:43.07, lng:-89.42}, pop:488073, area:1197.24},
        "Waukesha":{coord:{lat:43.02, lng:-88.31}, pop:389891, area:549.57},
        "Brown":{coord:{lat:44.48, lng:-87.99}, pop:248007, area:529.71},
        "Racine":{coord:{lat:42.78, lng:-87.76}, pop:195408, area:332.5},
        "Outagamie":{coord:{lat:44.41, lng:-88.46}, pop:176695, area:637.52},
        "Winnebago":{coord:{lat:44.06, lng:-88.64}, pop:166994, area:434.49},
        "Kenosha":{coord:{lat:42.58, lng:-87.81}, pop:166426, area:271.99},
        "Rock":{coord:{lat:42.67, lng:-89.07}, pop:160331, area:718.14},
        "Marathon":{coord:{lat:44.9, lng:-89.76}, pop:134063, area:1544.98},
        "Washington":{coord:{lat:43.37, lng:-88.23}, pop:131887, area:430.70},
        "Sheboygan":{coord:{lat:43.72, lng:-87.66}, pop:115507, area:511.27},
        "La Crosse":{coord:{lat:43.91, lng:-91.11}, pop:114638, area:451.69},
        "Walworth":{coord:{lat:42.67, lng:-88.54}, pop:102228, area:555.13},
        "Fond du Lac":{coord:{lat:43.76, lng:-88.49}, pop:101633, area:719.55},
        "Eau Claire":{coord:{lat:44.73, lng:-91.29}, pop:98736, area:637.98},
        "Dodge":{coord:{lat:43.42, lng:-88.71}, pop:88759, area:875.63},
        "Ozaukee":{coord:{lat:43.398475, lng:-87.893572}, pop:86395, area:233.08},
        "St. Croix":{coord:{lat:45.04, lng:-92.45}, pop:84345, area:722.33},
        "Jefferson":{coord:{lat:43.02, lng:-88.78}, pop:83686, area:556.47},
        "Manitowoc":{coord:{lat:44.15, lng:-87.55}, pop:81442, area:589.08},
        "Wood":{coord:{lat:44.45, lng:-90.04}, pop:74749, area:793.12},
        "Portage":{coord:{lat:44.48, lng:-89.50}, pop:70019, area:800.68},
        "Chippewa":{coord:{lat:45.07, lng:-91.28}, pop:62415, area:1008.37},
        "Sauk":{coord:{lat:43.43, lng:-89.94}, pop:61976, area:830.9},
        "Columbia":{coord:{lat:43.47, lng:-89.33}, pop:56833, area:756.53},
        "Waupaca":{coord:{lat:44.48, lng:-88.91}, pop:52410, area:747.71},
        "Grant":{coord:{lat:42.86, lng:-90.71}, pop:51208, area:1146.85},
        "Calumet":{coord:{lat:44.08, lng:-88.22}, pop:48971, area:318.24},
        "Barron":{coord:{lat:45.42, lng:-91.85}, pop:45870, area:862.71},
        "Monroe":{coord:{lat:43.95, lng:-90.62}, pop:44673, area:900.78},
        "Polk":{coord:{lat:45.46, lng:-92.44}, pop:44205, area:913.96},
        "Douglas":{coord:{lat:46.45, lng:-91.91}, pop:44159, area:1304.14},
        "Dunn":{coord:{lat:44.95, lng:-91.90}, pop:43857, area:850.11},
        "Shawano":{coord:{lat:44.79, lng:-88.76}, pop:41949, area:893.06},
        "Marinette":{coord:{lat:45.34, lng:-88.00}, pop:41749, area:1399.35},
        "Pierce":{coord:{lat:44.72, lng:-92.42}, pop:41019, area:573.75},
        "Oconto":{coord:{lat:44.99, lng:-88.23}, pop:37660, area:997.99},
        "Green":{coord:{lat:42.68, lng:-89.60}, pop:36842, area:583.96},
        "Oneida":{coord:{lat:45.70, lng:-89.52}, pop:35998, area:1112.97},
        "Clark":{coord:{lat:44.73, lng:-90.61}, pop:34690, area:1209.82},
        "Vernon":{coord:{lat:43.59, lng:-90.83}, pop:29773, area:791.58},
        "Trempealeau":{coord:{lat:44.30, lng:-91.35}, pop:28816, area:732.97},
        "Lincoln":{coord:{lat:45.33, lng:-89.73}, pop:28743, area:878.97},
        "Door":{coord:{lat:45.02, lng:-87.01}, pop:27785, area:481.98},
        "Juneau":{coord:{lat:43.92, lng:-90.11}, pop:26664, area:766.93},
        "Waushara":{coord:{lat:44.11, lng:-89.24}, pop:24496, area:626.15},
        "Iowa":{coord:{lat:43.00, lng:-90.13}, pop:23687, area:762.58},
        "Vilas":{coord:{lat:46.05, lng:-89.51}, pop:21430, area:856.60},
        "Adams":{coord:{lat:43.97, lng: -89.77}, pop:20875, area:645.65},
        "Taylor":{coord:{lat:45.21, lng:-90.50}, pop:20689, area:974.88},
        "Kewaunee":{coord:{lat:44.59, lng:-87.44}, pop:20574, area:342.52},
        "Jackson":{coord:{lat:44.32, lng:-90.81}, pop:20449, area:987.72},
        "Langlade":{coord:{lat:45.13, lng:-89.0}, pop:19977, area:870.64},
        "Green Lake":{coord:{lat:43.81, lng:-89.04}, pop:19051, area:349.44},
        "Richland":{coord:{lat:43.38, lng:-90.43}, pop:18021, area:586.15},
        "Lafayette":{coord:{lat:42.66, lng:-90.14}, pop:16836, area:633.59},
        "Crawford":{coord:{lat:43.23, lng:-90.93}, pop:16644, area:570.66 },
        "Sawyer":{coord:{lat:45.90, lng:-91.14}, pop:16557, area:1257.31},
        "Ashland":{coord:{lat:46.71, lng:-90.56}, pop:16157, area:1045.04},
        "Washburn":{coord:{lat:45.90, lng:-91.79}, pop:15911, area:797.11},
        "Burnett":{coord:{lat:45.87, lng:-92.37}, pop:15457, area:821.85},
        "Marquette":{coord:{lat:43.82, lng:-89.39}, pop:15404, area:455.60},
        "Bayfield":{coord:{lat:46.63, lng:-91.18}, pop:15014, area:1477.86},
        "Rusk":{coord:{lat:45.48, lng:-91.14}, pop:14755, area:913.59},
        "Price":{coord:{lat:45.68, lng:-90.36}, pop:14159, area:1254.38},
        "Buffalo":{coord:{lat:44.38, lng:-91.75}, pop:13587, area:671.64},
        "Forest":{coord:{lat:45.67, lng:-88.78}, pop:9304, area:1014.07},
        "Pepin":{coord:{lat:44.60, lng:-92.00}, pop:7469, area:231.98},
        "Iron":{coord:{lat:46.33, lng:-90.26}, pop:5916, area:758.17},
        "Florence":{coord:{lat:45.85, lng:-88.40}, pop:4423, area:488.20},
        "Menominee":{coord:{lat:45.02, lng:-88.70}, pop:4232, area:357.61}
      }
    };

    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { lat: latitude, lng: longitude },
            loading: false
          });
        },
        () => {
          this.setState({ loading: false });
        }
      );
      fetch("https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_WI/MapServer/12/query?where=DATE%20%3E%3D%20TIMESTAMP%20'"+new Date(new Date().getTime()-86400000).toISOString().split('T')[0]+"%2000%3A00%3A00'%20AND%20DATE%20%3C%3D%20TIMESTAMP%20'"+new Date().toISOString().split('T')[0]+"%2000%3A00%3A00'&outFields=NAME,POS_7DAYAVG&outSR=4326&f=json")
      .then((res) => res.json()).then((json) => {
        let temp = {};
        json.features.map((county) => temp[county.attributes.NAME] = county.attributes.POS_7DAYAVG);
        this.setState({covid: temp});
      });
    }

  getColor(county) {
    let percent = this.state.covid[county]/this.state.counties[county].pop;
    if (percent === 0) {
      return '#000000';
    } else if (percent <= 0.0001) {
      return '#110000';
    } else if (percent <= 0.0002) {
      return '#220000';
    } else if (percent <= 0.0003) {
      return '#330000';
    } else if (percent <= 0.0004) {
      return '#440000';
    } else if (percent <= 0.0005) {
      return '#550000';
    } else if (percent <= 0.0006) {
      return '#660000';
    } else if (percent <= 0.0007) {
      return '#770000';
    } else if (percent <= 0.0008) {
      return '#880000';
    } else if (percent <= 0.0009) {
      return '#990000';
    } else if (percent <= 0.001) {
      return '#AA0000';
    } else if (percent <= 0.0011) {
      return '#BB0000';
    } else if (percent <= 0.0012) {
      return '#CC0000';
    } else if (percent <= 0.0013) {
      return '#DD0000';
    } else if (percent <= 0.0014) {
      return '#EE0000';
    } else {
      return '#FF0000';
    }
  }
  
  render() {
    const { loading, userLocation } = this.state;
    // const { google } = this.props;

    if (loading) {
      return null;
    }
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={userLocation}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <Polygon paths={[{lat:25,lng:-80},{lat:18,lng:-66},{lat:32,lng:-80}]}/>
          {Object.keys(this.state.counties).map(county => {return(<Circle key={county} radius={this.state.counties[county].area * 27} fillColor={this.getColor(county)} fillOpacity={0.77} center={this.state.counties[county].coord}/>);})}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCba5Z2xaqw3zNZcgis6h01iFbwzjy7-hk'
})(ManuBarMap);