# Stream Pad Remote

Stream Pad Remote is an Android mobile companion app for the Stream Pad Windows
desktop app. It lets your phone start your PC with Wake-on-LAN, send manual
Bluetooth keyboard input for Windows sign-in, connect to Stream Pad on your
local network, run configured desktop buttons, edit remote button metadata, and
use your phone screen as a mouse touchpad.

It is built with Expo, React Native, and native Android modules.

## Project Documents

- [MIT License](LICENSE.md)

## How It Connects To Stream Pad

Stream Pad Remote does not replace the Windows desktop app. The mobile app acts
as a remote controller for Stream Pad:

- Stream Pad stores the profiles, buttons, icons, and actions on the PC.
- Stream Pad Remote connects to the Stream Pad desktop WebSocket server on the
  same local network.
- The phone syncs the desktop profiles and sends commands back to the PC.
- Button edits made from the phone are sent to the desktop app and saved there.
- Touchpad movement, clicks, and scrolling are sent to the desktop app, which
  applies them to the Windows mouse.

For full remote control, install matching app versions on both sides:

- Stream Pad Remote on Android.
- Stream Pad on Windows.

## What It Does

- Start a configured PC with Wake-on-LAN.
- Use Android BLE HID keyboard mode for manual Windows sign-in.
- Connect to the Stream Pad desktop app by IP address and port.
- Sync up to 15 Stream Pad profiles.
- View, run, edit, and delete up to 20 buttons per profile.
- Use emoji, phone album images, or valid image URLs as button icons.
- Control the Windows mouse with a mobile touchpad.
- Check GitHub Releases for Android APK updates.

## Requirements

- Android phone or tablet.
- Stream Pad installed and running on the Windows PC.
- Phone and PC on the same local network for desktop control and touchpad use.
- Wake-on-LAN enabled in BIOS/UEFI, Windows, and the network adapter for PC
  startup.
- Bluetooth on the PC and phone for Android HID keyboard sign-in.

## Download And Install

Go to the latest GitHub Release and download:

- `stream-pad-remote-v<version>.apk`

Install the APK on Android. If Android blocks the install, allow APK installs
for the browser or file manager you used to open it.

The app keeps the same Android package id between releases, so newer APKs can
replace older installed versions.

## How To Use

1. Install and open Stream Pad on the Windows PC.
2. Make sure the PC and phone are on the same network.
3. Open Stream Pad Remote on Android.
4. Use `Start PC` to send a Wake-on-LAN packet when the PC is powered off.
5. Use `Sign In` to pair Android keyboard mode and manually send keys.
6. Use `Desktop App` to enter the PC IP address, connect, sync profiles, and run
   buttons.
7. Use `Touchpad` to enter the same PC connection details, connect, then drag,
   tap, click, or scroll from the phone.

## Development

Install dependencies:

```powershell
npm install
```

Run Expo:

```powershell
npm start
```

Run the Android dev build:

```powershell
npm run android
```

Type-check the app:

```powershell
npm run typecheck
```

Build a local Android release APK:

```powershell
cd android
$env:NODE_ENV = "production"
.\gradlew.bat :app:assembleRelease
```

## Updates

Stream Pad Remote checks the latest GitHub Release for a newer APK. When an APK
asset is available, the app downloads it and opens the Android installer so the
new version can replace the old one.

## Legal

Stream Pad Remote is released under the MIT License. See `LICENSE.md`.

Stream Pad Remote is an independent project and is not affiliated with,
endorsed by, or sponsored by Elgato, CORSAIR, or any other stream controller
product maker.
