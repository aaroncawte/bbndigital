import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  accessToken: process.env.MAILCHIMP_ACCESS_TOKEN,
  server: process.env.MAILCHIMP_SERVER,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Error for all request types other than POST
    res.status(405).setHeader("Allow", "POST").end("Method Not Allowed");
  } else {
    const { email_address } = JSON.parse(req.body);
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!email_address) {
      // Error if no email address is provided, meaning that we cannot sign it up
      res
        .status(400)
        .json({ success: false, error: "No email address provided" });
    } else {
      try {
        await mailchimp.lists.addListMember(audienceId, {
          email_address,
          status: "pending",
        });

        res.status(200).json({
          success: true,
          message: "Contact added to list successfully.",
        });
      } catch (e) {
        res.status(400).json({
          success: false,
          message:
            "Something went wrong. Check your email address is correct, or if you might have signed up already.",
        });
      }
    }
  }
}
