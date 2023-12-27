import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <VStack
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        gap="8"
        max
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton
            className={cls.userName}
            width={100}
            height={16}
          />
        </div>
        <Skeleton className={cls.text} width="100%" />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      className={classNames(cls.CommentCard, {}, [className])}
      gap="8"
      max
    >
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
        {comment?.user.avatar
          ? <Avatar size={30} src={comment?.user.avatar} />
          : null}
        <Text className={cls.userName} title={comment?.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack>
  );
});
