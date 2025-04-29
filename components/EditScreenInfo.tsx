import { Text, View } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-4">
      <View className={styles.getStartedContainer}>
        <Text className="mb-4 text-xl font-bold text-red-600">{title}</Text>

        <View className={`${styles.codeHighlightContainer} ${styles.homeScreenFilename}`}>
          <Text className="font-mono text-blue-700">{path}</Text>
        </View>

        <Text className={styles.getStartedText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = {
  codeHighlightContainer: 'rounded-md bg-white px-3 py-2 shadow-md',
  getStartedContainer: 'items-center bg-white p-6 rounded-xl shadow-lg',
  getStartedText: 'text-base leading-6 text-center text-gray-700 mt-4',
  helpContainer: 'items-center mx-5 mt-4',
  helpLink: 'py-4',
  helpLinkText: 'text-center text-blue-500 underline',
  homeScreenFilename: 'my-2',
};
