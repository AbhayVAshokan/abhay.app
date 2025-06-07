import { Image, Link, Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import IconText from './icon-text'
import { cn } from '../utils/cn'
import { useTheme } from '../theme'
import { AtSign, Github, Globe, Linkedin, Mail, MapPin, Phone, PhoneCall, Twitter } from 'lucide-react'


export interface HeadingProps {
  style?: Styles[string]
  avatarSize?: number
  avatarUrl: string
  title: string
  bio: string
  information: {
    phone: string
    email: string
    website: string
    linkedin: string
    github: string
    twitter: string
    location: string
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
  },
  image: {
    borderRadius: 99999,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'semibold',
  },
  subTitle: {
    fontSize: 9,
    marginTop: 4,
    fontFamily: 'Raleway',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  link: {
    marginRight: 12,
    textDecoration: 'none',
  },
})

const Heading = ({
  style,
  title,
  bio,
  avatarUrl,
  avatarSize = 100,
  information: { phone, email, website, linkedin, github, twitter, location },
}: HeadingProps) => {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subTitle]}>
          {bio}
        </Text>
        <View style={styles.infoContainer}>
          <Link src={`tel:${phone}`} style={styles.link}>
            <IconText text={phone} Icon={Phone} />
          </Link>
          <Link src={`mailto:${email}`} style={styles.link}>
            <IconText text={email} Icon={AtSign} />
          </Link>
          <Link src={github} style={styles.link}>
            <IconText text="AbhayVAshokan" Icon={Github} />
          </Link>
          <Link src={twitter} style={styles.link}>
            <IconText text="@abhayvashokan" Icon={Twitter} />
          </Link>
          <Link src={linkedin} style={styles.link}>
            <IconText text="Linkedin" Icon={Linkedin} />
          </Link>
          <Link src={website} style={styles.link}>
            <IconText text="abhay.app" Icon={Globe} />
          </Link>
          <IconText text={location} Icon={MapPin} />
        </View>
      </View>
      <View
        style={[
          styles.imageContainer,
          { width: avatarSize, height: avatarSize },
        ]}
      >
        {/* alt property doesn't exist for @react-pdf/renderer Image */}
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
        <Image style={styles.image} src={avatarUrl} />
      </View>
    </View>
  )
}

export default Heading;
