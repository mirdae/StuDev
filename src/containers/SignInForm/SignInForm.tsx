import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestSignIn } from '../../modules/user/actions'
import * as S from './SignInFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { RootState } from '../../modules'

type SignInFormProps = {
  props: any
}
function SignInForm({ props }: SignInFormProps) {
  const dispatch = useDispatch()
  const [socialId, setSocialId] = useState('')
  const [password, setPassword] = useState('')

  const { id } = useSelector((state: RootState) => state.userReducer)

  useEffect(() => {
    if (id > 0) {
      props.history.push('/')
    }
  }, [id])

  const handleSignIn = () => {
    dispatch(requestSignIn({ socialId, password }))
  }

  return (
    <S.Container>
      <Input
        type="text"
        placeHolder="아이디"
        value={socialId}
        handleChange={(e) => setSocialId(e.target.value)}
        notice="none"
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        notice="none"
      >
        <LockOutlinedIcon />
      </Input>
      <Button text="로그인" handleClick={handleSignIn} buttonType="submit" />
      <Link to="/sign-up">회원가입</Link>
    </S.Container>
  )
}

export default React.memo(SignInForm)
