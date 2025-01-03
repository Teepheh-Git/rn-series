import React, { Fragment } from 'react';

import { Button, FocusAwareStatusBar, View } from '@/components/ui';

export default function Entry() {
  // const router = useRouter();

  return (
    <Fragment>
      <FocusAwareStatusBar />
      <View className="flex-1 justify-center p-4">
        <Button
          onPress={() => {}}
          label="Continue"
          textClassName="color-slate-50"
        />
      </View>
    </Fragment>
  );
}
