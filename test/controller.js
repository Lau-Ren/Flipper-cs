import tape from 'tape'
import controller from 'controller'


// fill meeee!!!!

// you have some really nice modulated code here, which should mean that testing it is fairly easy
// I'd like you to write unit tests for each of your functions in controller and
// view, and then an integration test to text the view and router

// One thing to be aware of when testing you're controller functions, is that you are
// pulling in your model. In these instances you still want to test your functions, but you
// do not want to test the functions that you are pulling in. So you want to test that the functions are
// running and calling the model.getTweets, but you don't want to test the model.getTweets
// function itself. This needs to be tested in the test/model.js test file.

// Though it's good to test things, you don't want to test them more than once, as that is a
// waste of time. Therefore, what you need to do is 'stub' them out. Stub the function out,
// so that it returns an expected value when it's called, so you don't end up running superflous code

// See this blog for more details

// http://blog.wercker.com/2014/12/23/Testing-in-Node.html