import { FlatList, View } from 'react-native';

import { Group } from './group';

import { GroupsExercises } from 'src/types';

type GroupsProps = {
  data?: GroupsExercises[];
};

export const Groups = ({ data }: GroupsProps) => {
  return (
    <View className="my-10 ml-8">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Group title={item.name} isActive={false} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
