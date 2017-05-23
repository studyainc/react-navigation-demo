## React Navigation Investigation

We plan to replace `react-native-router-flux` with `react-navigation` in our mobile project, and this repo is the investigation for some functionality validations.

### How To Run

```bash
git clone git@github.com:studyainc/react-navigation-demo.git
cd react-navigation-demo
yarn
```

Then 

```bash
react-native run-ios
```
Or 

```bash
react-native run-android
```

### Check Points

#### Android Hardware Back Button Crash & Warnning Test

For issue: `Warning: BackAndroid is deprecated. Please use BackHandler instead.`

`react-navigation` resolve this issue in version `1.0.0-beta.10`, the issues can be tracked down from: [react-navigation-issue](https://github.com/react-community/react-navigation/issues/1597)

So we need to use the version which is equal to or greater than version `1.0.0-beta.10`

The `When use Android hardware back button to exit the App, the App crashes!` issue is gone with `react-navigation@1.0.0-beta.10`.

#### Tab Test

The tab screens are wrapped in `TabNavigator` and the other screens are wrapped separately in `StackNavigator`.

The `react-navigation Tab` functionality works well.

#### Dynamic Right Button Test

- Define custom `right header button` in `navigationOptions`
- When implement `Dymanic Right Header Button`, renders a custom React component, and pass `navigation.params` and `navigation.setParams` to the custom React component
- Implement some `actions` like `onPressHandler` in the custom React component.
- Change the value of `this.navigation.params` to make the parent component reredner.

Please refer to the [TabDetail](https://github.com/studyainc/react-navigation-demo/blob/master/src/components/TabDetail.js) and [RightButton](https://github.com/studyainc/react-navigation-demo/blob/master/src/components/RightButton.js) for more details.