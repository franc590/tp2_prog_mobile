import ChatKitty from '@chatkitty/core';

export const chatkitty = ChatKitty.getInstance('61cb6a07-d412-4cb7-9f5e-dd7ea5be2bef');

export function channelDisplayName(channel) {
  if (channel.type === 'DIRECT') {
    return channel.members.map((member) => member.displayName).join(', ');
  } else {
    return channel.name;
  }
}